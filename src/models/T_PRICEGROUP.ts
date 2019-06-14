import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRICEGROUP', {schema: 'dbo' } )
export class T_PRICEGROUP {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 5,
        name: 'PRG_PRICEGROUP_C',
        })
    public PRG_PRICEGROUP_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'PRG_LANGUAGECODE_C',
        })
    public PRG_LANGUAGECODE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'PRG_DESCRIPTION_C',
        })
    public PRG_DESCRIPTION_C: string | null;

    @Column('tinyint', {
        nullable: true,
        name: 'PRG_SORT_N',
        })
    public PRG_SORT_N: number | null;

    @Column('tinyint', {
        nullable: true,
        name: 'PRG_LABELPRINT_N',
        })
    public PRG_LABELPRINT_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'PRG_NEEDRECEPTION_C',
        })
    public PRG_NEEDRECEPTION_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PRG_GROUPTYPE_C',
        })
    public PRG_GROUPTYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PRG_LOCALMANAGE_C',
        })
    public PRG_LOCALMANAGE_C: string | null;

}
