import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_AJUSTEMENT', {schema: 'dbo' } )
@Index('IX_AJUSTEMENT_CREATION', ['AJU_CREATION_DAT'])
@Index('IX_AJUSTEMENT_EFFECTDAT', ['AJU_EFFECT_DAT'])
@Index('IX_AJUSTEMENT_STATUS', ['AJU_STATUS_C'])
export class T_AJUSTEMENT {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'AJU_AJUSTEMENTID_N',
        })
    public AJU_AJUSTEMENTID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 2,
        name: 'AJU_STATUS_C',
        })
    public AJU_STATUS_C: string;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'AJU_USERID_C',
        })
    public AJU_USERID_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'AJU_EFFECT_DAT',
        })
    public AJU_EFFECT_DAT: Date;

    @Column('datetime', {
        nullable: false,
        name: 'AJU_CREATION_DAT',
        })
    public AJU_CREATION_DAT: Date;

    @Column('datetime', {
        nullable: true,
        name: 'AJU_VALIDATION_DAT',
        })
    public AJU_VALIDATION_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'AJU_DELETE_DAT',
        })
    public AJU_DELETE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'AJU_FLAG1_C',
        })
    public AJU_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'AJU_FLAG2_C',
        })
    public AJU_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'AJU_FLAG3_C',
        })
    public AJU_FLAG3_C: string | null;

}
