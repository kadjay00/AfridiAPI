import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_UNKNOWNEAN', {schema: 'dbo' } )
export class T_UNKNOWNEAN {

    @Column('decimal', {
        nullable: false,
        primary: true,
        precision: 13,
        scale: 0,
        name: 'UEA_EANCODE_N',
        })
    public UEA_EANCODE_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'UEA_INTRODATE_DAT',
        })
    public UEA_INTRODATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'UEA_LASTSALEDATE_DAT',
        })
    public UEA_LASTSALEDATE_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'UEA_COUNTER_N',
        })
    public UEA_COUNTER_N: number | null;

}
