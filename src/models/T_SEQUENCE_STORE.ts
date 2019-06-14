import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SEQUENCE_STORE', {schema: 'dbo' } )
export class T_SEQUENCE_STORE {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'SES_SEQID_N',
        })
    public SES_SEQID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'SES_DESCRIPTION_C',
        })
    public SES_DESCRIPTION_C: string;

    @Column('varchar', {
        nullable: false,
        length: 2,
        name: 'SES_TYPE_C',
        })
    public SES_TYPE_C: string;

    @Column('int', {
        nullable: true,
        name: 'SES_SEQNR_N',
        })
    public SES_SEQNR_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'SES_CREATION_DAT',
        })
    public SES_CREATION_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'SES_CREATIONUSER_C',
        })
    public SES_CREATIONUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SES_UPDATE_DAT',
        })
    public SES_UPDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'SES_UPDATEUSER_C',
        })
    public SES_UPDATEUSER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SES_GROUP_C',
        })
    public SES_GROUP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'SES_STATUS_N',
        })
    public SES_STATUS_N: number | null;

}
