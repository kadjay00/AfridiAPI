import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_REGISTRY', {schema: 'dbo' } )
export class T_REGISTRY {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'REG_IDENTITY_N',
        })
    public REG_IDENTITY_N: number;

    @Column('varchar', {
        nullable: false,
        length: 250,
        name: 'REG_KEYNAME_C',
        })
    public REG_KEYNAME_C: string;

    @Column('varchar', {
        nullable: false,
        length: 50,
        name: 'REG_KEYVALUE_C',
        })
    public REG_KEYVALUE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'REG_COLKEY_C',
        })
    public REG_COLKEY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'REG_COLVALUE_C',
        })
    public REG_COLVALUE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'REG_PARKEY_C',
        })
    public REG_PARKEY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'REG_PARTYPE_C',
        })
    public REG_PARTYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'REG_PARCOL_C',
        })
    public REG_PARCOL_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'REG_PARVALUE_C',
        })
    public REG_PARVALUE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'REG_PARTESTVALUE_C',
        })
    public REG_PARTESTVALUE_C: string | null;

}
